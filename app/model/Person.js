Ext.define('MyDemo.model.Person', {
    extend: 'MyDemo.model.Base',
    fields: ['firstName', 'lastName', 'age', 'favoriteColor'],
    statics: {
        generateData: (function() {//generate这个key代表的值是一个自执行函数
            var lasts = ['Jones', 'Smith', 'Lee', 'Wilson', 'Black', 'Williams', 'Lewis', 'Johnson', 'Foot', 'Little', 'Vee', 'Train', 'Hot', 'Mutt'],
                firsts = ['Fred', 'Julie', 'Bill', 'Ted', 'Jack', 'John', 'Mark', 'Mike', 'Chris', 'Bob', 'Travis', 'Kelly', 'Sara'],
                colors = ['Red', 'Green', 'Blue'],
                currentYear = (new Date()).getFullYear();//获取年

            function getRandom(array) {//数组中取随机一个，ok
                var index = Ext.Number.randomInt(0, array.length - 1);
                return array[index];
            }

            function getName(seen) {//生成一个没有出现过的名字
                var name = {
                    first: getRandom(firsts),
                    last: getRandom(lasts)
                };

                if (seen[name.first + name.last]) {//出现了？？？
                    return getName(seen);//递归
                } else {
                    return name;
                }
            }

            function getDate() {//生成随机日期，ok
                var y = Ext.Number.randomInt(currentYear - 5, currentYear),
                    m = Ext.Number.randomInt(0, 11),//0为1月
                    maxDays = Ext.Date.getDaysInMonth(new Date(y, m, 1));//参数为年月日，获取那个年月下的最大天数
                d = Ext.Number.randomInt(1, maxDays);//从最大天数中随机生成一个日期

                return new Date(y, m, d);//返回这个随机的日期，参数年月日
            }

            function getKey() {//随机生成一个五位字符，ok
                var chars = '',
                    i;
                for (i = 0; i < 5; ++i) {
                    chars += String.fromCharCode(Ext.Number.randomInt(97, 122));
                    //随机生成一个char字母，添加到chars里
                }
                return chars;
            }

            return function(options) {//参数是个对象//includeAccounts: true, total: 5
                options = options || {};//返回第一个有效值

                var out = [],
                    adults = options.adults,//un
                    children = options.children,//un
                    total = options.total,//5
                    includeAccounts = options.includeAccounts,//true
                    seenNames = {},
                    adultsUndef = adults === undefined,//true或false
                    childrenUndef = children === undefined,//true或false
                    accountIdCounter = 0,
                    name, o, accounts, i, j, len;

                if (!adultsUndef && !childrenUndef) {//刚开始false不走
                    total = adults + children;
                } else {
                    // We rely on total now
                    total = total || 15;//5
                    if (adultsUndef && childrenUndef) {//true
                        adults = Ext.Number.randomInt(Math.floor(total * 0.25), Math.floor(total * 0.75));//1~3  3~11
                        children = total - adults;//2~4  4~12
                    } else if (adultsUndef) {
                        adults = total - children;
                    } else {
                        children = total - adults;
                    }
                }

                for (i = 0; i < total; ++i) {//5  15
                    name = getName(seenNames);//生成一个没出现的名字？？？并没有往seenNames里放数据
                    o = {//新建一个o
                        id: i + 1,
                        firstName: name.first,
                        lastName: name.last,
                        age: i >= adults ? Ext.Number.randomInt(0, 17) : Ext.Number.randomInt(18, 100),
                        favoriteColor: getRandom(colors)
                    };

                    if (includeAccounts) {//是否包含账户！！！，传参过来的
                        accounts = [];
                        len = Ext.Number.randomInt(1, 5);//随机生成账户个数
                        for (j = 0; j < len; ++j) {
                            accounts.push({
                                id: ++accountIdCounter,
                                created: getDate(),
                                accountKey: getKey(),
                                personId: o.id
                            });
                        }
                        o.accounts = accounts;
                    }
                    out.push(o);
                }
                return out;
            };
        })()
    }
});