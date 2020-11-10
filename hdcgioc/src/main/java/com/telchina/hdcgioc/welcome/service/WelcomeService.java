package com.telchina.hdcgioc.welcome.service;

import com.telchina.hdcgioc.welcome.entity.WelcomeData;
import com.telchina.hdcgioc.welcome.entity.wenshu_info;
import com.telchina.hdcgioc.welcome.mapper.WelcomeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class WelcomeService {

    @Autowired
    private WelcomeMapper welcomeMapper;

    public void saveData(String chinese,String engish,String imgsave,String imgnum) {
      
        welcomeMapper.saveData(chinese,engish,imgsave,imgnum);
     
    }
    public Map<String, Object> readingData() {
        Map<String, Object> resultMap = new HashMap<>();
        List<WelcomeData> model = welcomeMapper.readingData();
        resultMap.put("model", model);
        return resultMap;
    }
    public Map<String, Object> get_penalty_class() {
        Map<String, Object> resultMap = new HashMap<>();
        List<String> penalty_class = welcomeMapper.get_penalty_class();
        resultMap.put("penalty_class", penalty_class);
        return resultMap;
    }
    public Map<String, Object> get_edu() {
        Map<String, Object> resultMap = new HashMap<>();
        List<String> penalty_class = welcomeMapper.get_edu();
        resultMap.put("edu_list", penalty_class);
        return resultMap;
    }
    public Map<String, Object> get_prision_type() {
        Map<String, Object> resultMap = new HashMap<>();
        List<String> penalty_class = welcomeMapper.get_prision_type();
        resultMap.put("prison_type_list", penalty_class);
        return resultMap;
    }
    public Map<String, Object> get_difinite_by_class(String penalty_class) {
        Map<String, Object> resultMap = new HashMap<>();
        List<String> model = welcomeMapper.get_penalty_definite(penalty_class);
        resultMap.put("penalty_definite", model);
        return resultMap;
    }
    public Map  get_difinite_num(String penalty_definite) {
        int definite_num = welcomeMapper.get_definite_num(penalty_definite);
        Map m = new HashMap();
        m.put("definite_num",definite_num);
        return m;
    }
    public Map<String,Object> wenshu_ByPenalty_definite(String penalty_definite, int page_no,int page_size){
        Map<String,Object> resultMap = new HashMap<>();
        int page_start = (page_no-1)*page_size;
        List<wenshu_info> wenshu_list = welcomeMapper.get_wenshu_ByDefinite(penalty_definite,page_start,page_size);
        resultMap.put("wenshu_list",wenshu_list);
        return resultMap;
    }
    public Map  get_class_num(String penalty_class) {
        int class_num = welcomeMapper.get_class_num(penalty_class);
        Map m = new HashMap();
        m.put("class_num",class_num);
        return m;
    }
    public Map<String,Object> wenshu_ByPenalty_class(String penalty_class, int page_no,int page_size){
        Map<String,Object> resultMap = new HashMap<>();
        int page_start = (page_no-1)*page_size;
        List<wenshu_info> wenshu_list = welcomeMapper.get_wenshu_Byclass(penalty_class,page_start,page_size);
        resultMap.put("wenshu_list",wenshu_list);
        return resultMap;
    }
}
