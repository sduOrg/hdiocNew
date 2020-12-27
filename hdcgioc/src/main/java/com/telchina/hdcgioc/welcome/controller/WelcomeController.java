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
    public Map get_wenshuBy_definite(@RequestParam(value = "penalty_definite",required = false,defaultValue ="")String penalty_definite,@RequestParam(value = "page_no",required = false,defaultValue ="1") int page_no,@RequestParam(value = "page_size",required = false,defaultValue ="10") int page_size){
        return welcomeService.wenshu_ByPenalty_definite(penalty_definite,page_no,page_size);

    }
    //获取类罪对应的文书记录 输入为 (类罪名，第几页(从1开始),页面大小)
    @RequestMapping(value = "/get_wenshuBy_class", method = RequestMethod.GET)
    public Map get_wenshuBy_class(@RequestParam(value = "penalty_class",required = false)String penalty_class,@RequestParam(value = "page_no",required = false,defaultValue ="1") int page_no,@RequestParam(value = "page_size",required = false,defaultValue ="10") int page_size){
        return welcomeService.wenshu_ByPenalty_class(penalty_class,page_no,page_size);

    }
    //获取学历列表
    @RequestMapping("/get_all_edu")
    public Map<String,Object> get_all_edu(){
        return welcomeService.get_edu();

    }
    //获取刑罚类型列表
    @RequestMapping("/get_prision_type")
    public Map<String,Object> get_prison_type(){
        return welcomeService.get_prision_type();

    }
    //过滤教育程度 刑罚
    @RequestMapping(value = "/get_wenshu_prisonTypeEdu")
    public Map<String,Object> get_wenshu_prisonTypeEdu(@RequestParam(value = "penalty_class", required = false) String penalty_class,@RequestParam(value = "penalty_definite",required = false) String penalty_definite,@RequestParam(value = "prison_type",required = false) String prison_type,@RequestParam(value = "edu_level",required = false) String edu_level,@RequestParam(value = "page_no",defaultValue = "1") int page_no,@RequestParam(value = "page_size",defaultValue = "10") int page_size){
        return welcomeService.wenshuBy_edu_prisionType(penalty_class,penalty_definite,prison_type,edu_level,page_no,page_size);

    }
    //过滤 年龄 类罪 个罪
    @RequestMapping(value = "/get_wenshu_age")
    public Map<String,Object> get_wenshu_age(@RequestParam(value = "penalty_class", required = false) String penalty_class,@RequestParam(value = "penalty_definite",required = false) String penalty_definite,@RequestParam(value = "age_start",defaultValue = "14") int  age_start,@RequestParam(value = "age_end",defaultValue = "70") int  age_end,@RequestParam(value = "page_no",required = false,defaultValue = "1" ) int page_no,@RequestParam(value = "page_size",required = false,defaultValue = "10") int page_size){
        return welcomeService.wenshuBy_age(penalty_class,penalty_definite,age_start,age_end,page_no,page_size);

    }
    //省份过滤
    @RequestMapping(value = "/get_wenshu_province")
    public Map<String,Object> get_wenshu_wenshu(@RequestParam(value = "penalty_class", required = false) String penalty_class,@RequestParam(value = "penalty_definite",required = false)String penalty_definite,@RequestParam(value = "province_address",required = false) String province_address,@RequestParam(value = "province_residence",required = false) String province_residence,@RequestParam(value = "page_no",required = false,defaultValue = "1" ) int page_no,@RequestParam(value = "page_size",required = false,defaultValue = "10") int page_size){
        return welcomeService.wenshuBy_province(penalty_class,penalty_definite,province_address,province_residence,page_no,page_size);

    }
    //有期徒刑 刑期过滤
    @RequestMapping(value = "/get_wenshuPrisonLength")
    public Map<String,Object> wenshuBy_prisonLength(@RequestParam(value = "penalty_class", required = false) String penalty_class,@RequestParam(value = "penalty_definite",required = false) String penalty_definite,@RequestParam(value = "length_start",defaultValue = "0") double length_start,@RequestParam(value = "length_end",defaultValue = "240") double length_end,@RequestParam(value = "page_no",required = false,defaultValue = "1" ) int page_no,@RequestParam(value = "page_size",required = false,defaultValue = "10") int page_size){
        return welcomeService.wenshuBy_prisonLength( penalty_class, penalty_definite,length_start, length_end, page_no, page_size);

    }
    //羁押周期过滤
    @RequestMapping(value = "/get_wenshuInterMonth")
    public Map<String,Object> wenshuBy_interMonth(@RequestParam(value = "penalty_class", required = false) String penalty_class,@RequestParam(value = "penalty_definite",required = false) String penalty_definite,@RequestParam(value = "start",defaultValue = "0") int start,@RequestParam(value = "end",defaultValue = "36") int end,@RequestParam(value = "page_no",required = false,defaultValue = "1" ) int page_no,@RequestParam(value = "page_size",required = false,defaultValue = "10") int page_size){
        return welcomeService.wenshuBy_interMonth( penalty_class, penalty_definite,start, end, page_no, page_size);

    }
    //法定情节过滤
    @RequestMapping(value = "/get_wenshu_laws")
    public Map<String,Object> get_wenshu_wenshu(@RequestParam(value = "penalty_class", required = false) String penalty_class,@RequestParam(value = "penalty_definite",required = false)String penalty_definite,@RequestParam(value = "laws",required = false) String laws,@RequestParam(value = "page_no",required = false,defaultValue = "1" ) int page_no,@RequestParam(value = "page_size",required = false,defaultValue = "10") int page_size){
        return welcomeService.wenshuBy_laws(penalty_class,penalty_definite,laws,page_no,page_size);

    }
    //获取全部法定情节列表
    @RequestMapping("/get_laws")
    public Map<String,Object> get_laws(){
        return welcomeService.get_laws();

    }
    //获取全部无罪审判关键词
    @RequestMapping("/getNoPenaltyKeyword")
    public Map<String,Object> getNoPenaltyKeyword(){
        return welcomeService.get_noPenalty_keyword();

    }
    //获取全部无罪审判关键词发条
    @RequestMapping("/getNoPenaltyLaws")
    public Map<String,Object> getNoPenaltyLaw(){
        return welcomeService.get_noPenalty_law();

    }
    //法定情节过滤
    @RequestMapping(value = "/getNoPenaltyWenshu")
    public Map<String,Object> getNoPenaltyWenshu(@RequestParam(value = "law", required = false) String law,@RequestParam(value = "keyword",required = false) String keyword,@RequestParam(value = "page_no",required = false,defaultValue = "1" ) int page_no,@RequestParam(value = "page_size",required = false,defaultValue = "10") int page_size){
        return welcomeService.noPenalty_wenshu(keyword, law,page_no,page_size);

    }









}
