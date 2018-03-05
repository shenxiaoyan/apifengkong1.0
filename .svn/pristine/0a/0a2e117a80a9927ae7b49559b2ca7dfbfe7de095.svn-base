package apifengkong.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import apifengkong.entity.User;
import apifengkong.entity.UserRepository;

public class UserService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(s);
        if (user == null) {
            throw new UsernameNotFoundException("用户名不存在");
        }
        System.out.println("username:"+user.getUsername()+";password:"+user.getPassword());
        return user;
    }
    public Map<String, Object> userList(Map map) {
    	Map<String, Object> jsonmap=new HashMap<String,Object>();
    	List<User> ulist=new ArrayList<User>();
    	for (User user : ulist) {
			
		}
		return jsonmap;
		
	}
}