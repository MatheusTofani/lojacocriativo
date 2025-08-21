const admin = require("firebase-admin");
const XLSX = require("xlsx");

// importa o service account
const serviceAccount = require("./lojacocriativo-1c233-firebase-adminsdk-fbsvc-0850e74ddd.json");

// inicializa o Firebase Admin com as credenciais
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// função para importar os dados do Excel
async function importExcel(filePath, collectionName) {
  // lê o arquivo Excel
  const workbook = XLSX.readFile(filePath);

  // pega a primeira planilha
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // converte para JSON
  const data = XLSX.utils.sheet_to_json(sheet);

  console.log(`Importando ${data.length} registros para a coleção "${collectionName}"...`);

  // salva no Firestore
  const batch = db.batch();

  data.forEach((row, index) => {
    const docRef = db.collection(collectionName).doc(); // gera um ID automático
    batch.set(docRef, row);
  });

  try {
    await batch.commit();
    console.log("✅ Importação concluída!");
  } catch (err) {
    console.error("❌ Erro ao salvar no Firestore:", err);
  }
}

// exemplo de uso
importExcel("./catalogo.xlsx", "produtos");
