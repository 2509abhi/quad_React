import React from 'react'

function Screen1(prop){
  // let img = prop.title;
  // console.log(img);
  return (
    <>
    {
    prop.title.map((item)=>
		<>
    {/* {item.show.image["medium"]}   */}
		</>
		) }
    </>
    )
}

export default Screen1;
