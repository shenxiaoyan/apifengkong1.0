package apifengkong.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.BeanWrapper;
import org.springframework.beans.PropertyAccessorFactory;

public class List2MapUtil {
	/** 
     * K: key class type, V: value class type 
     *  
     * @param sourceList 
     * @param keyName 
     *            key property 
     * @param keyClass 
     *            key Class type 
     * @return 
     */  
//    public static <K, V> Map<K, V> convert2Map(List<V> sourceList, String keyName, Class<K> keyClass) {  
//        Map<K, V> map = new HashMap<K, V>();  
//        
//        if (sourceList == null || sourceList.isEmpty()) {  
//            return map;  
//        }  
//  
//        for (V value : sourceList) {  
//  
//            BeanWrapper beanWrapper = PropertyAccessorFactory.forBeanPropertyAccess(value);  
//            beanWrapper.setAutoGrowNestedPaths(true);  
//  
//            K key = keyClass.cast(beanWrapper.getPropertyValue(keyName));  
//            if (key == null) {  
//                continue;  
//            }  
//            map.put(key, value);  
//        }  
//  
//        return map;  
//    }  
}
