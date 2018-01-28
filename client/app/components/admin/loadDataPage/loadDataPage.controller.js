class LoadDataPageController {
  constructor($state, $http, $rootScope) {
    'ngInject';
    this.hostUrl = _API_;
    this.$state = $state;
    this.$http = $http;
    this.$rootScope = $rootScope;
    this.dataFileList = null;
    this.fileReader = new FileReader();
    this.betsData = [];
    this.fileReader.onload = () => this.parseDataFromFile(this.fileReader.result);
  }

  loadDataFile() {
    this.$http({
        method: "POST",
        url: `${this.hostUrl}/match`,
        dataType: 'json',
        data: this.betsData,
        headers: { "Content-Type": "application/json" }})
      .then((response) => {
        console.log('data=',response);
        this.$state.go('homePage');
      })
      .catch((error) => console.log('ERROR=', error));
  }

  parseDataFromFile(csv) {
      let lines = csv.split("\n");
      lines.pop();

      let headers = lines[0].split(",");

      for(let i = 1; i<lines.length; i++){

        let match = {};
        match.bets = {};
        let currentLine = lines[i].split(",");

        for(let j=0; j<headers.length; j++) {
          if(j > 6) {
            match.bets[headers[j]] = currentLine[j];
          } else {
            match[headers[j]] = currentLine[j];
          }
        }
        this.betsData.push(match);
      }
  }

  onFileSelected() {
    this.fileReader.readAsText(this.dataFileList.item(0));
  }

}

export default LoadDataPageController;
