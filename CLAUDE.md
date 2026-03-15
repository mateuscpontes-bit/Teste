# CLAUDE.md

This file provides guidance to AI assistants (like Claude) working on this repository.

## Visão Geral do Projeto

> **Este repositório está em fase inicial.** Nenhum código-fonte, dependências ou configuração foram adicionados ainda. Atualize esta seção quando o projeto for definido.

- **Nome:** Teste
- **Descrição:** _(a definir)_
- **Tecnologia principal:** _(a definir)_
- **Propósito:** _(a definir)_

## Estrutura do Repositório

> A ser preenchida conforme o projeto crescer.

```
/
├── CLAUDE.md       # Este arquivo
└── (demais arquivos serão adicionados aqui)
```

## Fluxo de Desenvolvimento

### Branches

- Todo desenvolvimento por assistentes de IA deve ocorrer em branches com o prefixo `claude/`
- Exemplo: `claude/add-feature-XXXX`
- **Nunca** fazer push diretamente para `main` ou `master` sem permissão explícita

### Commits

- Use mensagens de commit claras e descritivas em português ou inglês
- Prefira commits atômicos (uma mudança lógica por commit)
- Exemplo de mensagem: `feat: adiciona estrutura inicial do projeto`

### Push

```bash
git push -u origin <nome-da-branch>
```

- Sempre use `-u` para rastrear a branch remota
- Em caso de falha de rede, tente novamente com backoff exponencial (2s, 4s, 8s, 16s)

## Comandos

> A ser preenchido quando o stack tecnológico for definido.

```bash
# Instalar dependências
# (comando a definir)

# Executar em desenvolvimento
# (comando a definir)

# Rodar testes
# (comando a definir)

# Build para produção
# (comando a definir)

# Lint / formatação
# (comando a definir)
```

## Convenções de Código

> A ser preenchido conforme o projeto crescer.

- Linguagem principal: _(a definir)_
- Formatador: _(a definir)_
- Linter: _(a definir)_
- Estilo de nomenclatura: _(a definir)_

## Diretrizes para Assistentes de IA

### O que fazer

- **Leia antes de editar.** Sempre leia um arquivo antes de modificá-lo.
- **Entenda o contexto.** Explore código existente antes de propor soluções.
- **Reutilize.** Prefira usar funções e utilitários já existentes.
- **Minimalismo.** Faça apenas as mudanças necessárias para a tarefa.
- **Confirme ações destrutivas.** Antes de deletar arquivos, branches ou fazer force push, confirme com o usuário.

### O que evitar

- **Não adicione código não solicitado** — sem refatorações extras, docstrings, comentários ou tratamento de erros desnecessário.
- **Não crie abstrações prematuras** — três linhas repetidas são melhores que uma abstração prematura.
- **Não introduza vulnerabilidades de segurança** — evite injeção de comandos, XSS, SQL injection e outros riscos do OWASP Top 10.
- **Não faça push para branches erradas** — sempre verifique a branch de destino.
- **Não assuma requisitos futuros** — implemente apenas o que foi pedido.

### Fluxo recomendado

1. Leia os arquivos relevantes
2. Entenda o padrão existente
3. Implemente a mudança mínima necessária
4. Rode os testes (quando disponíveis)
5. Faça commit com mensagem descritiva
6. Faça push para a branch correta

## Histórico de Atualizações deste Arquivo

| Data       | Descrição                              |
|------------|----------------------------------------|
| 2026-03-15 | Criação inicial do CLAUDE.md           |
