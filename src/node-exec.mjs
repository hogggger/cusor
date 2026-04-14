/*
 * @Email: deuntlt@gmail.com
 * @Author: hogger
 * @Github: xxxx
 * @Date: 2026-04-12 22:45:25
 * @Description: node js 执行模块
 */
import {  spawn } from 'node:child_process'

const command = 'echo -e "n\nn" |pnpm create vite react-todo-app --template react-ts';
const cwd = process.cwd();

//解析命令和参数
// spawn 可以制定在cwd这个目录下执行命令，创建一个子进程来跑
const [cmd,...args] = command.split(' ');
const child = spawn(cmd,args,{
    cwd,
    stdio:'inherit',//  实时输出到控制台
    shell:true
})
let errorMsg = ''

child.on('error',(error)=>{
    errorMsg = error.message;
});

child.on('close',(code)=>{
    if(code === 0){
        process.exit(0)
    }else{
        if(errorMsg){
            console.log(error(`错误：${errorMsg}`))
        }
        process.exit(code || 1)
    }
})
