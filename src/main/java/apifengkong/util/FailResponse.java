package apifengkong.util;

public class FailResponse extends RuntimeException {
	
	private int code;
	private String message;
	
	public FailResponse(int code,String message){
		super(message);
		this.code = code;
		this.message = message;
	}



	public int getCode() {
		return code;
	}



	public void setCode(int code) {
		this.code = code;
	}



	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
