import FtpDeploy from "ftp-deploy";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT,
  localRoot: "./dist",
  remoteRoot: process.env.FTP_REMOTE_ROOT || "/httpdocs/",
  include: ["*", "**/*", ".*"],
  exclude: [".DS_Store", "Thumbs.db", ".git/**"],
  deleteRemote: true,
  forcePasv: true,
  sftp: false,
};

console.log("🚀 Starting FTP deployment...");

ftpDeploy
  .deploy(config)
  .then((res) => {
    console.log("✅ Deployment completed successfully!");
    console.log(`📁 Files uploaded: ${res.length}`);
  })
  .catch((err) => {
    console.error("❌ Deployment failed:", err);
    process.exit(1);
  });
