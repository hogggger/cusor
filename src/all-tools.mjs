/*
 * @Email: deuntlt@gmail.com
 * @Author: hogger
 * @Github: xxxx
 * @Date: 2026-04-14 23:08:38
 * @Description: 封装tools
 */

import { tool } from '@/langchain/core/tools'
import fs from 'node:fs/promises'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { z } from 'zod'

// 1.读取文件
const readFileTool = tool(
    async ({filePath}) => {
        try{
            const content = await fs.readFile(filePath, 'utf-8');
            return `文件内容：\n${content}`;
        }catch(error){
            return `读取文件失败: ${error.message}`
        };
    
    },
    {
        name:'read_file',
        description:'读取指定文件内容',
        schema:z.object({
            filePath:z.string().describe('要读取的文件路径')
        })
    }
)
// 2.写入文件工具

// 3.执行命令工具（带实时输出）
