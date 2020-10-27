let testCase = [
  {
    apiCallExecutor: [
      {
        input: {
          url: "https://api.slicepay.in/",
          method: "GET",
        },
        method: "include",
        output: {
          status: 400,
          message: "",
          success: false,
        },
      },
    ],
  },
  {},
];

let sampleInput = {
  vendorConfigList: [
    {
      type: "test",
      cred: {
    otp: {
      method: "xxx",
      api_key: "xxxx",
      sender: "xxxx",
      baseEndpoint: "xxxx",
    },
    transactional: {
      method: "xxx",
      api_key: "xxxx",
      sender: "xxxx",
      baseEndpoint: "xxxx",
    }
  }
    },{
    type: "mocked",
    cred:{
    }
  },
    {
      type: "random",
      cred:{}
    }]

};

module.exports = {
  sampleInput,
};
