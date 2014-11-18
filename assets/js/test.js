/**
 * Created by Administrator on 2014/11/18.
 */
var pool = [];
onconnect = function(e) {
    var portIndex = pool.length;
    var port = e.ports[0];
    port.index = portIndex;
    pool.push(port);
    port.onmessage = function(e){
        for(var i = 0; i < pool.length; i++){
            if(pool[i].index != portIndex){
                //pool[i].postMessage(pool[i].index);
                pool[i].postMessage('id: '+portIndex+', msg: '+e.data);
            }
        }
    }
};