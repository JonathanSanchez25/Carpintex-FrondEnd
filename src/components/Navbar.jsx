import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <a href="index.html" className="logo">
                        <img src="../../public/assets/images/logo.png" alt=""></img>
                    </a>
                    <ul className="nav">
                        <li className="scroll-to-section"><Link className="nav-link" to="/inicio">Inicio</Link></li>
                        <li className="scroll-to-section"><Link className="nav-link" to="/menu">Menu</Link></li>
                        <li className="scroll-to-section"><Link className="nav-link" to="/conocenos">Conocenos</Link></li>
                        <li className="scroll-to-section"><Link className="nav-link" to="/login">Login</Link></li>

                        {/* <li *ngIf="pedidos" className="scroll-to-section"><a [routerLink]="['/pedidos']">Pedidos</a></li> */}

                        {/* <li *ngIf="shoppingCart"  >
                            <a>
                                    <span id="txtPopupCantidad" className='text-white badge rounded-pill badge-notification bg-danger' data-toggle="popover" [attr.data-content]="popoverContent" data-placement="bottom" title=" Cesta ">{{counter}}</span>
                                    <i className="fas fa-shopping-cart color-white" (click)="goShopping()" style="cursor: pointer;"></i>
                                </a>
                            </li>
                       <div *ngIf="login"> <li ><a [routerLink]="['/login']"><i className="fa fa-user-circle" ></i></a></li> </div>
                       <div *ngIf="logout" style="cursor: pointer;"> <li ><a (click)="exit()"><i className="fa fa-sign-out" ></i></a></li> </div> */}
                    </ul>       
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</header> 
</>

 )
}

export default Navbar