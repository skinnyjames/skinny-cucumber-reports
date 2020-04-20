import * as React from 'react';
import './Embedding.css'

export class Embedding extends React.Component<{ embedding: any }, {}> {
  type() {
    switch(this.props.embedding.mime_type) {
      case 'image/png': 
        return 'image'
        break;
      case 'text/html': 
        return 'html'
        break;
    }
  }
  src() {
    return atob(this.props.embedding.data)  
  }

  openWindow(embedding: any) {
    var win = window.open();
    win.document.write(`<iframe src='data:${embedding.mime_type};base64,${embedding.data}' frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`)
  }

  render(){
    let embedding;
    if (this.type() === 'image') {
      embedding = (
        <a onClick={() => { this.openWindow(this.props.embedding) }}>
          <img  width="400" src={`data:${this.props.embedding.mime_type};base64,${this.props.embedding.data}`}/>
        </a>
      );
    } else {
      embedding = (
        <div dangerouslySetInnerHTML={{ __html: this.src() }}></div>
      );
    }
    return (
      <div>{ embedding }</div>
    );
  }
}