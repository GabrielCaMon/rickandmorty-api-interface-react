import React, { Component } from 'react';

class Footer extends Component{
    render(){
    return(
<div>
<footer className="page-footer deep-purple ">
<div className="container">
  <div className="row">
    <div className="col l6 s12">
      Copyright &copy; 2018 - by Gabriel Campos
    </div>
  </div>
</div>
<div className="footer-copyright">
  <div className="container">
  Feito com <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
  
  </div>
</div>
</footer>
</div>
    );
}
}
export default Footer;
