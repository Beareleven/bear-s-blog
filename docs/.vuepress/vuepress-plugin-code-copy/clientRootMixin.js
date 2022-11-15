import CodeCopy from './CodeCopy.vue'
import Vue from 'vue'

export default {
    updated() {
        // console.log('12')
        // 防止阻塞
        setTimeout(() => {
            document.querySelectorAll('div[class*="language-"] pre').forEach(el => {
				// console.log('one code block')
              	// 防止重复写入
                if (el.classList.contains('code-copy-added')) return
                let ComponentClass = Vue.extend(CodeCopy)
                let instance = new ComponentClass()
                instance.code = el.innerText
                instance.$mount()
                el.classList.add('code-copy-added')
                el.appendChild(instance.$el)
            })
        }, 100)
    }
}

