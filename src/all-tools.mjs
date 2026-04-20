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
// 2.写入文件工具
// 3.执行命令工具（带实时输出）
