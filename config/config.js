const config = {
  firebase: {
    type: "service_account",
    project_id: "backend-coder-7c673",
    private_key_id: "870a806342d4961d9b5942e18471d6e947e72dd9",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDRvSSyu9uND2Uc\n7bf8Us+FaVJDIX2P/SbJ/5I/MCvk0QFI8tm/+3aZKvnj7lmAKPTLyQTNCXxK6cEQ\nxkS/dnTA/GdpX58//YW/1EckFnmuLPB91VJZYcA6Fr9oOPrj1l4AGBgT7SeoFE61\n6pbSH1YylJPhoK2mTEpL8TPn5mHIiWT0DKn6mR+KvJ1HatTxLAd5w8Lou+v3ovmy\nrJSQUofR9mbhVqyfbIirlDcfyTPEK/lCV8NLmdc+bm8emMkUJdn7iWmmWsweUwH4\nwHYLRemT8y+QP+KR8F1JVilz1MtEumKXd8oDUZwP4sngTaPAyTsiMqUJb38kxEhJ\n+xlGSTLjAgMBAAECggEAIUm9RNbW+jTqzeQW0ufLwvdb1IbAuHUrzlyPOBMrrEXV\nx9+vWq6M/LNa9OeT8ejOLXfKmMY8IWGnQEPPjnm8/xIwUYOZMV1J+I+2+M3OYywD\nwVz1lHUUvsN0fpSokTepNKeeTq9Rn3YVpf7FEDVkB2QYcnN/jAjIs/Pk0pX4iAyo\n2FdhkZ751VgJf9R5qw6NlQ2VJog+jSmxgsrCsXO0OaRiRVzktI2Dfh4juo8U7vQa\ngRUutJuPYMDGgueXqWbCqY8f8cWlXzOUfLi4aROQ9GBI6mNxKo2G4nsbu3LF8RLa\nQzEdqRxglATmGs10bFqwn34g5J+r7Sx0Wa/GN/Cn/QKBgQDpdzm8RwxprtX/g2ty\nBoo0wL9PGsGP5vcNFj8EHbjBXkf1/J0Y1D4l2ThVKDpW8Eh5CnUXkJukS70nVI4H\nABTlALMUCAs9Kjbfxt8XbDbx9T4XknHeXq2AfWplETrabLqrcQccDzo106ZCB/30\nxkSQqqkTepim0Xh3BT0aUW507wKBgQDl+6Sl7uZlpCI0k/GRH9yw8+KFGpjh5O4p\nqTtU9KPM16oP7dbs3X/TUbWoey/S/pCPXL/WhfXRrKGSUl1K0mdeFtBXZJsplMby\nhs+I+7j8LK/rBXZow6qXMbDqPJzidj7pDK/WTIufxJx261v/BV6HyMypy17WI4Pl\nGikfC4ZpTQKBgHebHBoH8CUIbBvuERKmpRFnmdsF4xo9Al5TAk+yhl+SVJ2CIF2D\nBp/PTBvccx7tFMPmBpze+c3O+4X1vJl7gjjcBeKCSHe6c8hrEwnl57RHptrerLV2\nnb6RAfvrOtKCF5QTYMgQSQsgdjGn9IP9O00+EUaobSIxeFzJc0dTZppDAoGAaC5u\nj5yBUlngBOFf9NXyK1bPrmw2BV6nZMf80Kdh7FFmAIFFc1eDqD7Dg+cJ6xLWeZsS\nbCOTD8CcEKSvDk3x9XVwO6afg16aIRNgwDUHv3Se3GBFG4BHruYbtoBusUfPh9Lv\ndKyIM3/lQRmtOwE7qVcVH3W5KFg+T3JiXmXiJaECgYEAtWwx/tVa+Q03TlgBVUt4\nYLGsNVzsc0B2GDmbRkCL+KC9wbTgrg/IzISWHK8x2UjznxXF8NNRYqiRtSa0H7/e\nvvkAipdSHlH+PXEgxclZRNU6349hSE2TM1/SEeUk+i95bc0yODVanY+wlqqBPjc6\noPJ7wbfs9kAM6KW1pxCgQzI=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-57kmx@backend-coder-7c673.iam.gserviceaccount.com",
    client_id: "109019334922938471626",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-57kmx%40backend-coder-7c673.iam.gserviceaccount.com"
  },
  mongodb: `mongodb+srv://gab121:${process.env.DB_PASSWORD}@appprueba.jibhv.mongodb.net/ProyectoCoder?retryWrites=true&w=majority`
}

module.exports = config