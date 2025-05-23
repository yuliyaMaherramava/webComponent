package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller
public class DemoController {
    private static final Logger logger = LoggerFactory.getLogger(DemoController.class);

    @GetMapping("/")
    public String index(Model model) {
        Map<String, Object> data = new HashMap<>();
        data.put("seriesData", Arrays.asList(120, 200, 150, 80, 70, 110, 130));
        data.put("xAxisData", Arrays.asList("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"));
        logger.info("Adding data to model: {}", data);
        model.addAttribute("data", data);
        return "index";
    }
}
