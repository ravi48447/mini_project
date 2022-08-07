package com.operative.miniProjectBackend.controller;

import com.operative.miniProjectBackend.model.Professional;
import com.operative.miniProjectBackend.model.User;
import com.operative.miniProjectBackend.repository.ProfessionalRepository;
import com.operative.miniProjectBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;



@RestController
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    ProfessionalRepository professionalRepository;

    @PostMapping("/signupuser")
    @CrossOrigin("http://localhost:4200")
    public User signUpUser(@RequestBody User user) throws Exception{
        String tempEmailId = user.getEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)){
            userService.fetchUserByEmailId(tempEmailId);
            User user1 = userService.fetchUserByEmailId(tempEmailId);
            if (user1 != null){
                throw new Exception("user with" + tempEmailId+ " is already Exist");
            }
        }
        User user1 = null;
        user1 = userService.saveUser(user);
        return user1;
    }


    @PostMapping("/loginuser")
    @CrossOrigin("http://localhost:4200")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();
        String tempPass = user.getPassword();
        User user1 = null;

        if (tempEmailId != null && tempPass != null){
            user1 = userService.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
            System.out.println("Login Successfull");
        }
        if (user1 == null) throw new Exception("Error in logging");

            return user1;

    }

    @PostMapping("/signupprof")
    @CrossOrigin("http://localhost:4200")
    public Professional signUpProf(@RequestBody Professional professional) throws Exception {

        String tempEmailId1 = professional.getEmailId();

        if (tempEmailId1 != null && !"".equals(tempEmailId1)){
            userService.fetchUserByEmailId(tempEmailId1);
            Professional professional1 = userService.fetchProffesionalByEmailId(tempEmailId1);
            if (professional1 != null){
                throw new Exception("Professional with" + tempEmailId1+ " is already Exist");
            }
        }
        Professional professional1 = null;
        professional1 = userService.saveProfessinal(professional);
        return professional1;
    }

    @GetMapping("/getprof")
    @CrossOrigin("http://localhost:4200")
    public List<Professional> getAllProfessional()
    {
        return userService.getAllProfessional();
    }


    @PostMapping("/getprofCity")   //PostMapping because we are passing a parameter for searching City
    @CrossOrigin("http://localhost:4200")
    public List<Professional> getAllProfByCity(@RequestBody String city)  //Request Body can be used for search without ID
    {
        List<Professional> professionals = new ArrayList<Professional>();
        professionals =  userService.getProfessionalByCity(city);

        return professionals;
    }
}

//    @GetMapping("/prof/{city}")
//    @CrossOrigin("http://localhost:4200")
//    public ResponseEntity<List<Professional>> getProfessionalByCity(@PathVariable  String city){
//
//           return new ResponseEntity<>(city, HttpStatus.OK);
//
////        return new ResponseEntity<>(userService.getProfessionalByCity(), HttpStatus.OK);
////
////        String tempCity=
////        return userService.getProfessionalByCity(tempCity);
//    }



//    @PostMapping("/user")
//    public ResponseEntity<User> createUser(@RequestBody User user){
//       try {
//         User _user = userRepository.save(new User(user.getId(), user.getUserName(), user.getPassword(), user.getEmailId()));
//         return new ResponseEntity<>(_user, HttpStatus.CREATED);
//       }catch (Exception e){
//         return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//       }
//    }





