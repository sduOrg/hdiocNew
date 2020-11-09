package com.telchina.hdcgioc.welcome.controller;

import com.telchina.hdcgioc.welcome.service.WelcomeService;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/welcome")
public class WelcomeController {

    @Autowired
    private WelcomeService welcomeService;

    @RequestMapping("/saveData")
    public void saveData(String chinese,String engish,String imgsave,String imgnum) {
         welcomeService.saveData(chinese,engish,imgsave,imgnum);
    }
    @RequestMapping("/readingData")
    public Map<String, Object> readingData() {
        return welcomeService.readingData();
    }
    //获取全部类罪列表
    @RequestMapping("/get_penalty_class")
    public Map<String,Object> get_penaltyClass(){
        return welcomeService.get_penalty_class();

    }
    //获取类罪对应的个罪名
    @RequestMapping(value = "/get_penalty_byClass", method = RequestMethod.GET)
    public Map<String, Object> get_penalty_definite(@RequestParam(value = "penalty_class",required = false,defaultValue ="")String penalty_class){
        return welcomeService.get_difinite_by_class(penalty_class);

    }
    //获取个罪名对应的数量
    @RequestMapping(value = "/get_definite_num", method = RequestMethod.GET)
    public Map get_definite_num(@RequestParam(value = "penalty_definite",required = false,defaultValue ="")String penalty_definite){
        return welcomeService.get_difinite_num(penalty_definite);

    }
    //获取类罪名对应的数量
    @RequestMapping(value = "/get_class_num", method = RequestMethod.GET)
    public Map get_class_num(@RequestParam(value = "penalty_class",required = false,defaultValue ="")String penalty_class){
        return welcomeService.get_class_num(penalty_class);

    }
    //获取个罪对应的文书记录 输入为 (个罪名，第几页(从1开始),页面大小)
    @RequestMapping(value = "/get_wenshuBy_definite", method = RequestMethod.GET)
    public Map get_wenshuBy_definite(@RequestParam(value = "penalty_definite",required = false,defaultValue ="")String penalty_definite,@RequestParam(value = "page_no",required = false,defaultValue ="1") int page_no,@RequestParam(value = "page_size",required = false,defaultValue ="20") int page_size){
        return welcomeService.wenshu_ByPenalty_definite(penalty_definite,page_no,page_size);

    }
    //获取类罪对应的文书记录 输入为 (类罪名，第几页(从1开始),页面大小)
    @RequestMapping(value = "/get_wenshuBy_class", method = RequestMethod.GET)
    public Map get_wenshuBy_class(@RequestParam(value = "penalty_class",required = false,defaultValue ="")String penalty_class,@RequestParam(value = "page_no",required = false,defaultValue ="1") int page_no,@RequestParam(value = "page_size",required = false,defaultValue ="20") int page_size){
        return welcomeService.wenshu_ByPenalty_class(penalty_class,page_no,page_size);

    }


}
