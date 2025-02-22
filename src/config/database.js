import { createConnection } from "typeorm";

async function connectDB() {
  try {
    const connection = await createConnection();
    console.log("📌 Conectado ao banco de dados!");
    return connection;
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco:", error);
  }
}

export default connectDB; // Exportação em ESM
