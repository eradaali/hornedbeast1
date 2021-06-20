import React, { Component } from 'react'
import Hornedbeasts from './Hornedbeasts'
class Main extends Component {
    render() {
        let info = [{
            title: 'Rhino Family',
            description: 'A unicorn and a narwhal nuzzling their horns',
            keyword: 'narwhal',
            horns: 1,
            imgUrl:
                "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg "
        }
        ,
        {
            title: 'UniWhal',
            description: 'Mother (or father) rhino with two babies',
             keyword: 'rhino',
              horns: 2,
               imgUrl:
                "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80 "
        }
        ,

        {
            title: 'UniWhal',
            description: 'Mother (or father) rhino with two babies',
             keyword: 'rhino',
              horns: 2, 
              imgUrl:
                ' https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80 '
        }
        ] 
        return (
            <div>
    
      <Hornedbeasts title={info[0].title} description={info[0].description} keyword={info[0].keyword} horns={info[0].horns} imgUrl={info[0].imgUrl} />
      <Hornedbeasts title={info[1].title} description={info[1].description} keyword={info[1].keyword} horns={info[1].horns} imgUrl={info[1].imgUrl} />
      <Hornedbeasts title={info[2].title} description={info[2].description} keyword={info[2].keyword} horns={info[2].horns} imgUrl={info[2].imgUrl} />
            </div>
        )
    }
}
export default Main
