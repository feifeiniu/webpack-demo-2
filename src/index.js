import './file.scss'
import png from './assets/img.png'
console.log(png)


const div = document.getElementById('app')
div.innerHTML = `
 <image  src="${png}">`


const button = document.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        module.default()},
            ()=>{alert('加载失败')})
}