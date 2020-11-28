import {BlocBuilder, Bloc} from 'bloc-them';
import { TemplateResult, html } from 'lit-html';

class _LayThemBloc extends Bloc<any>{
  constructor(){
    super(undefined);
  }
}

export class LayThem extends BlocBuilder<_LayThemBloc, any> {
  private lay_them_in:string;
  private main_axis_alignment: string;
  private cross_axis_alignment: string;


  constructor(){
    super(_LayThemBloc, {
      useThisBloc: new _LayThemBloc()
    });
    let _in  = this.getAttribute("in");
    if(_in){
      _in = _in.toLowerCase();
    }else{
      _in = "column";
    }

    this.lay_them_in=_in;
    

    let ma = this.getAttribute("ma");
    if(ma){
      ma = ma.toLowerCase();
    }else{
      ma ="center";
    }

    this.main_axis_alignment = ma;

    let ca = this.getAttribute("ca");
    if(ca){
      ca = ca.toLowerCase();
    }else{
      if(_in === "stack"){
        ca = "center";
      }else{
        ca ="stretch";
      }
    }
    this.cross_axis_alignment = ca;
    
  }

  builder(state: any): TemplateResult {
    return html`
    <style>
      .container{
          width: 100%;
          height: 100%;
        overflow: auto;
      }
      .flex{
          display: flex;
          flex-wrap: nowrap;
          height: 100%;
          flex-direction: ${(()=>{
            if(this.lay_them_in == "stack"){
              return "column";
            }else{
              return this.lay_them_in;
            }
          })()};
          justify-content: ${this.main_axis_alignment};
          align-items: ${this.cross_axis_alignment};
          flex-wrap: nowrap;
          height: 100%;
          position: ${(()=>{
            if(this.lay_them_in == "stack"){
              return "relative";
            }else{
              return "static";
            }
          })()};
      }
      
      ${(()=>{
        if(this.lay_them_in == "stack"){
          return "::slotted(div){position: absolute;}";
        }else{
          return "";
        }
        
      })()}
    </style>
    <div class="container">
      <div class="flex" id="flex">
          <slot></slot>
      </div>
    </div>`;
  }
}

window.customElements.define('lay-them', LayThem);