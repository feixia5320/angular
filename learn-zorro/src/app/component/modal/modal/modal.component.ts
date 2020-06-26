import { Component, OnInit } from "@angular/core";
import { PopService } from 'src/app/service/pop.service';

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  constructor(private pop: PopService) {}
  list
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
            //  this.store$.dispatch(new HistoryUpdate({data: {name: item}}));
              }
            })
          });
        } else {
        }
    });
  }
 
}
