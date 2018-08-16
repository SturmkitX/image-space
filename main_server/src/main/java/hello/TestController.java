package hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/test/")
public class TestController {

    @GetMapping("/")
    public ModelAndView getTestMV() {
        ModelAndView mv = new ModelAndView("test_view");
        mv.addObject("mesaj", "cacat");

        return mv;
    }

    @PostMapping("/")
    public String postTestMV() {
        return "Ai ajuns aici cu un post?";
    }

//    @GetMapping("/test")
//    public String getIt(Model model) {
//        return "test_view";
//    }
}
