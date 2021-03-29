package com.nju.board.vo;

public class ResponseMsg {

    private int code;
    private String msg;
    private Object data;

    public static ResponseMsg success(Object data) {
        ResponseMsg res = new ResponseMsg();
        res.code = 200;
        res.msg = "";
        res.data = data;
        return res;
    }

    public static ResponseMsg fail(String msg) {
        ResponseMsg res = new ResponseMsg();
        res.code = 400;
        res.msg = msg;
        res.data = null;
        return res;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

}
