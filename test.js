const { MiMoAgentToolkit, IntentParser } = require('./index');

// Test Intent Parser
const parser = new IntentParser();
const testCases = [
  { input: 'json格式化', expected: 'json_format' },
  { input: 'base64编码', expected: 'base64' },
  { input: '计算SHA256', expected: 'hash' },
  { input: '时间戳转换', expected: 'timestamp' },
  { input: '正则匹配测试', expected: 'regex' },
  { input: '颜色HEX转RGB', expected: 'color' },
  { input: '安装GitHub Copilot', expected: 'setup' },
];

console.log('=== MiMo Agent Toolkit Tests ===\n');

let passed = 0;
testCases.forEach(({ input, expected }) => {
  const result = parser.parse(input);
  const ok = result === expected ? '✓' : '✗';
  if (result === expected) passed++;
  console.log(`${ok} "${input}" → ${result} (expected: ${expected})`);
});

console.log(`\n${passed}/${testCases.length} tests passed`);

// Test full workflow
console.log('\n=== Full Workflow Test ===\n');
const toolkit = new MiMoAgentToolkit();
toolkit.run('帮我格式化JSON数据').then(result => {
  console.log('Workflow result:', JSON.stringify(result, null, 2));
});
