function DisplayDate() {
    let now = new Date();
    //年を取得する
    let YYYY = now.getFullYear();
    //月を取得する
    let MM = now.getMonth()+1;
    //日を取得する
    let DD = now.getDate();
    
    alert(YYYY + "/" + MM + "/" + DD);
  }