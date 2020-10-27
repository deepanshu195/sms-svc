import helper from "../../utils/helper";
import responseMessage from "../../utils/responseMessage";
import apiCall from "../../network/apiCallExecutor";
import SmsBase from "./index";
class AwsPinpoint extends SmsBase{
  cred: any;
  constructor(name:string,cred: any) {
    super(name);
    this.cred = cred;
  }
}
export default AwsPinpoint;
