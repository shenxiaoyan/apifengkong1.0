package apifengkong.controller;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.itextpdf.text.Document;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.tool.xml.XMLWorkerHelper;


import apifengkong.entity.APISearchLog;
import apifengkong.entity.APISearchLogRepository;
import apifengkong.util.Common;
@Controller
public class DownloadController {
	@Autowired
	APISearchLogRepository apiSearchLogRepository;
     //报告下载
	@RequestMapping("/getApiSearchLog")
	@ResponseBody
	public List<APISearchLog> getApiSearchLog() {
		Integer id=Common.getPrincipal().getId();
		return apiSearchLogRepository.getApiSearchLog(id);
	}
	//pdf下载
	@RequestMapping(value = "/createpdf", method = RequestMethod.POST)
	@ResponseBody
	public void createpdf(HttpServletRequest request, HttpServletResponse response, String html, String filename) {
		String basePath = DownloadController.class.getResource("").toString();
		basePath = basePath.replaceAll("file:/", "");

		// String basePath=PathUrl.getPath();
		System.out.println(basePath);
		

		try {
			String newfilename=URLEncoder.encode(filename,"utf-8");
			response.setContentType("application/octet-stream");
			response.setHeader("Content-Disposition", "attachment; filename=" + newfilename + ".pdf");
			//response.setCharacterEncoding("UTF-8");
			System.out.println(filename);
			ServletOutputStream sos = null;
			sos = response.getOutputStream();

			createPdf(html, sos, basePath);
		} catch (Exception e1) {
			e1.printStackTrace();
		}
	}
	public static void createPdf(String html, ServletOutputStream sos, String basePath)
			throws IOException, Exception  {
		// step 1
	Document document = new Document();
		// step 2
		PdfWriter writer = PdfWriter.getInstance(document, sos);
		// step 3
		document.open();
		html = addHeader(html, basePath);
		html = addEnd(html, basePath);
		ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(html.getBytes(Charset.forName("UTF-8")));
		// step 4
		XMLWorkerHelper.getInstance().parseXHtml(writer, document, byteArrayInputStream, Charset.forName("UTF-8"));
		// step 5
		document.close();
	}
	public static String addHeader(String html, String basePath) {
		BufferedReader bre = null;
		String str = null;
		String result = null;

		try {

			bre = new BufferedReader(new FileReader(basePath + "/header.txt"));
			int i = basePath.indexOf("WEB-INF", 0);
			basePath = basePath.substring(0, i);
			while ((str = bre.readLine()) != null) {
				if (str.contains("href")) {
					str = "<link href=\"" + basePath + "css/pdfPrint.css\" rel=\"stylesheet\" type=\"text/css\" />";
				}
				result += str;
			}
			return result + html;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String addEnd(String html, String basePath) {

		BufferedReader bre = null;
		String str = null;
		String result =new String();
		try {
			bre = new BufferedReader(new FileReader(basePath + "/end.txt"));
			while ((str = bre.readLine()) != null) {
				result += str;
			}
			System.out.println(result);
			return html + result;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
