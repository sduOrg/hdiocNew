package com.telchina.hdcgioc.welcome.mapper;


import com.telchina.hdcgioc.welcome.entity.WelcomeData;
import com.telchina.hdcgioc.welcome.entity.wenshu_info;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WelcomeMapper {
    void saveData(String chinese, String engish, String imgsave, String imgnum);
    List<WelcomeData> readingData();
    List<String> get_penalty_class();
    List<String> get_penalty_definite(String penalty_class);
    List<String> get_edu();
    List<String> get_prision_type();

    int get_definite_num(String penalty_definite);
    List<wenshu_info> get_wenshu_ByDefinite(String penalty_definite, int page_start, int page_size);
    int get_class_num(String penalty_class);
    List<wenshu_info> get_wenshu_Byclass(String penalty_class, int page_start, int page_size);
    //刑罚种类 文化程度 年龄 类罪 个罪

    List<wenshu_info> get_wenshu_filter(String penalty_class,String penalty_definite,String prison_type,String edu_level,int page_start, int page_size);


}
