plugins: [    
    new webpack.DefinePlugin({           
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),      
      REACT_APP_BANK_DETAIL: JSON.stringify(process.env.REACT_APP_BANK_DETAIL),
      REACT_APP_ACC_WORD: JSON.stringify(process.env.REACT_APP_ACC_WORD),
      REACT_APP_RTBG: JSON.stringify(process.env.REACT_APP_RTBG),
      REACT_APP_MOBILE: JSON.stringify(process.env.REACT_APP_MOBILE),
      REACT_APP_EMAIL: JSON.stringify(process.env.REACT_APP_EMAIL),
    })
  ]