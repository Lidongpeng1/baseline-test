'use strict';

function collectSameElements(collectionA, objectB) {
          var result = new Array();
          var c = objectB.toString();
          for (var i = 0; i < attendUid.length; i++) {
              if (c.indexOf(attendUid[i].toString()) > -1) {
                  for (var j = 0; j < objectB.length; j++) {
                      if (attendUid[i] == objectB[j]) {
                          result.push(attendUid[i]);
                          break;
                      }
                  }
              }
          }
          //console.log(result);
          return result;
}
// function getTheSame() {
//        var attendUid = ["张三", "李四", "马六"];
//        var dataattendUid = ["王五", "李四", "赵四","张三"];
//        var result = new Array();
//        var c = dataattendUid.toString();
//        for (var i = 0; i < attendUid.length; i++) {
//            if (c.indexOf(attendUid[i].toString()) > -1) {
//                for (var j = 0; j < dataattendUid.length; j++) {
//                    if (attendUid[i] == dataattendUid[j]) {
//                        result.push(attendUid[i]);
//                        break;
//                    }
//                }
//            }
//        }
//        //console.log(result);
//        return result;
//    }
