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
    int get_definite_num(String penalty_definite);
    List<wenshu_info> get_wenshu_ByDefinite(String penalty_definite, int page_start, int page_size);

}
