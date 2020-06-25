import { Component, OnInit } from '@angular/core';
import { PopService } from '../service/pop.service';
import { Store } from '@ngrx/store';
import { HistoryUpdate } from '../aside-left/histroy.actions';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  list: any;
  constructor(public pop:PopService,
              private store$:Store) { }
  ngOnInit() {
    this.list = [
      {
        id: '10000',
        icon: 'windows',
        url: 'bjsafjsaue.xxx.com',
        status: 'idle',
        ip:'192.168.1.102',
        fileUrl: '/var/lib/curson',
        resource: [{id:'10',name:'Firefox'},{id:'11',name:'Chrome'}],
        deny: true
      },
      {
        id: '10001',
        icon: 'windows',
        url: 'bjsafjsaue.xxx.com',
        status: 'idle',
        ip:'192.168.1.102',
        fileUrl: '/var/lib/curson',
        resource: [{id:'10',name:'Firefox'},{id:'11',name:'Chrome'},{id:'13',name:'Safari'},{id:'14',name:'Ubuntu'}],
        deny: true
      },
      {
        id: '10002',
        icon: 'windows',
        url: 'bjsafjsaue.xxx.com',
        status: 'idle',
        ip:'192.168.1.102',
        fileUrl: '/var/lib/curson',
        resource:  [{id:'11',name:'Chrome'},{id:'13',name:'Safari'},{id:'14',name:'Ubuntu'}],
        deny: false
      },
      {
        id: '10003',
        icon: 'windows',
        url: 'bjsafjsaue.xxx.com',
        status: 'buiding',
        ip:'192.168.1.102',
        fileUrl: '/var/lib/curson',
        deny: false
      },
      {
        id: '10004',
        icon: 'windows',
        url: 'bjsafjsaue.xxx.com',
        status: 'buiding',
        ip:'192.168.1.102',
        fileUrl: '/var/lib/curson',
        resource:  [{id:'10',name:'Firefox'},{id:'14',name:'Ubuntu'}],
        deny: false
      },
      {
        id: '10005',
        icon: 'windows',
        url: 'bjsafjsaue.xxx.com',
        status: 'idle',
        ip:'192.168.1.102',
        fileUrl: '/var/lib/curson',
        resource:  [{id:'10',name:'Firefox'},{id:'11',name:'Chrome'},{id:'13',name:'Safari'},{id:'14',name:'Ubuntu'}],
        deny: false
      },
      {
        id: '10006',
        icon: 'windows',
        url: 'bjsafjsaue.xxx.com',
        status: 'idle',
        ip:'192.168.1.102',
        fileUrl: '/var/lib/curson',
        resource:  [{id:'14',name:'Ubuntu'}],
        deny: false
      },
      {
        id: '10007',
        icon: 'windows',
        url: 'bjsafjsaue.xxx.com',
        status: 'buiding',
        ip:'192.168.1.102',
        fileUrl: '/var/lib/curson',
        resource:  [{id:'10',name:'Firefox'},{id:'11',name:'Chrome'},{id:'13',name:'Safari'}],
        deny: false
      }
    ]
  }

  remove(id,resourceId) {
    // 调删除资源的接口，成功后删除该资源；

    //前端手动删除资源,应该使用id判断，因为提交的资源没有掉接口，无id，所以用name匹配删除
    this.list.map(item => {
      if(item.id===id) {
        item.resource.map((i,n)=> {
          if(i.name===resourceId) {
            item.resource.splice(n,1);
          }
        })
      }
    })
  }

  add(id) {
    let config = {};
    config[id]=[,,,{
      type: 'text'
    }]
    // this.pop.show()
   this.pop.dialog(config).afterClose().subscribe((res) => {
        if (res) {
          // 获取的弹窗提交的结果掉后台接口保存，此处没有借口，暂用静态数据
          res[id]&&res[id].replace(/[\uff0c]/g, ",").split(",").map(item => {
            this.list.map((i,n)=> {
              if(i.id===id) {
                i.resource.push({name:item});
                  // 新增成功后执行
             this.store$.dispatch(new HistoryUpdate({data: {name: item}}));
              }
            })
          });
        } else {
        }
    });
    
  }
}