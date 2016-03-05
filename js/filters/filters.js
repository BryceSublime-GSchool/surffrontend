angular.module('filters', [])
.filter('selectRegion', function () {
        return function (incItems, continent) {
            var out = [{}];
            if(continent){
                for(x=0; x<incItems.length; x++){
                    if(incItems[x].continent == continent)
                        out.push(incItems[x]);
                }
                return out;
            }
            else if(!value){
                return incItems
            }
        };
    });
