// module.exports = {
//     apps: [
//       {
//         name: "visa-client",
//         script: "node_modules/next/dist/bin/next",
//         args: "start",
//         cwd: "C:/ProgramData/Jenkins/.jenkins/workspace/vishal ujja",
//         watch: false
//       }
//     ]
//   };
  
  
 
  
module.exports = {
  apps: [
    {
      name: "Ujjian_Mahakal",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 6465",     
      cwd: "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Ujjain_mahakal",

      env: {
        NODE_ENV: "production"
      }
    }
  ]
};

  
