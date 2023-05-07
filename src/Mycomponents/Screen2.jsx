import React from 'react'

function Screen2(prop){
  // var strippedHtml = prop.title.replace(/<[^>]+>/g, '');
  // const S2 = {
  //   display: "block"
  // }
  return (
    <>
    {prop.title.map((item)=>
		<>
		{item.show.summary.replace(/<[^>]+>/g, '')}
    <br/>
		</>
		) }
    </>
    )
}

export default Screen2;

