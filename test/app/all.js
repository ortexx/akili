import Component from '../../src/component.js';

export default class All extends Component {
  constructor(...args) {
    super(...args);

    this.el.innerHTML += `
      <ssr>\${ this.x }</ssr>
    `;

    this.el.innerHTML += `
      <script>\${ this.undefinedValue.x }</script>
      <style>\${ this.undefinedValue.x }</style>
      <prevent>
        <if is="true"></if>
        <input/>        
      </prevent>
    `;

    this.el.innerHTML += `
      <cancel></cancel>
      <prevent>
        <if is="true"></if>
        <input/>        
      </prevent>
    `;

    this.el.innerHTML += `
      <a 
        url="/"
        on-compiled="\${ this.compiled = true }"
        on-recompiled="\${ this.recompiled = true }"
        on-resolved="\${ this.resolved = true }"
        on-removed="\${ this.__component.checkRemovedEvent = true }"
      >
        location link
      </a>
    `;

    this.el.innerHTML += `
      <attr 
        test="\${this.cAttr}" 
        on-test="\${this.cAttrEvent = event.detail}"
      ></attr>
    `;

    this.el.innerHTML += `
      <first-store></first-store>
      <second-store></second-store>
    `;

    this.el.innerHTML += `
      <object url="\${this.cObjectValue}"></object>
    `;

    this.el.innerHTML += `
      <if recreate is="\${this.cIfData === 0}">0</if>
      <else-if is="\${this.cIfData === 1}">1</else-if>
      <else-if is="\${this.cIfData === 2}">2</else-if>
      <else-if is="\${this.cIfData === 3}">3</else-if>
      <else>4</else>
    `;
    
    this.el.innerHTML += `
      <for in="\${this.cForData}">\${this.loopKey}=\${this.loopValue}</for>
      <for in="\${ {x: 1, y: 2} }">
        <div component="loop" in="\${[1]}">
          \${this.loopKey}=\${this.loopValue}
        </div>
      </for>
      <ul in="\${this.cForData}"><li>\${this.loopKey}=\${this.loopValue}</li></ul>
    `;

    this.el.innerHTML += `
      <input 
        value="\${this.cInputValue}" 
        focus="\${this.cInputFocus}"
        debounce="100"
        on-debounce="\${this.cInputValue = event.target.value}"
      />
      <textarea 
        value="\${this.cTextareaValue}" 
        on-input="\${this.cTextareaValue = event.target.value}"></textarea>
      <content 
        editable="true"
        focus="true"
        value="\${this.cContentValue}" 
        on-input="\${this.cContentValue = event.target.innerHTML}"></content>
      <div contenteditable></div>
      <input type="checkbox" checked="\${this.cCheckboxChecker}"/>
    `;

    this.el.innerHTML += `
      <select
        multiple="\${this.cSelectMultiple}"
        value="\${this.cSelectValue}"
        in="\${this.cSelectData}"
        chunks="2"
        on-change="\${this.cSelectValue = event.target.content}"
      >
       <option selected="\${this.loopKey == 2}">\${this.loopValue}</option>
      </select>
    `;

    this.el.innerHTML += `
      <radio
        name="radio"
        value="\${this.cRadioValue}"
        on-radio="\${this.cRadioValue = event.detail}"
      >
        <radio-button value="radio-1"></radio-button>
        <input type="radio" value="radio-2"/>
      </radio>
      <radio
        name="radio2"
        in="\${this.cForData}"
        chunks="2"
      >
        <radio-button value="\${ this.loopValue }"></radio-button>
      </radio>
    `
  }
}
