# Estilo Boutique | Moda Feminina & Plus Size até o 56 (Guarapuava/PR)

> **Demonstração Interativa de E-Commerce** desenvolvida para a **Estilo Boutique**, boutique de moda feminina e plus size localizada no centro de Guarapuava/PR.

---

## 🌸 Sobre a Marca

- **Nome**: Estilo Boutique | Moda Feminina em Guarapuava
- **Slogan**: Moda Feminina & Plus Size até o 56
- **Endereço**: Rua Presidente Getúlio Vargas, 1294 — Centro, Guarapuava/PR
- **Entrega**: Envio rápido e seguro para todo o Brasil
- **WhatsApp Oficial**: [+55 (42) 99910-4224](https://wa.me/5542999104224)
- **Instagram**: [@estiloboutiquemodapluss](https://www.instagram.com/estiloboutiquemodapluss/)
- **Grade de Tamanhos**: P ao 56 (especialistas em modelagem plus size)

---

## 🛍️ Sobre esta Demonstração

Esta aplicação é uma demonstração de experiência de compra online criada para validar visualmente a arquitetura da marca, a usabilidade mobile/desktop, catálogo segmentado e fluxo de sacola de compras.

### O que é demonstrativo:
- **12 Produtos Ilustrativos**: Itens com fotos de alta qualidade (Unsplash), descrições focadas em moda plus size e preços em R$ ilustrativos.
- **Tabela de Medidas**: Modal com guia demonstrativo de medidas corporais (P ao 56) como referência para consultoria.
- **Checkout Simulado**: O formulário de finalização valida os dados na interface e apresenta um modal de simulação de pedido concluído. **Nenhum dado é enviado a servidores de cobrança e nenhum pagamento é processado.**
- **Canal Direto**: Todos os botões de atendimento ("Dúvidas? Fale conosco no WhatsApp") abrem diretamente a conversa oficial com a loja física no número `+55 (42) 99910-4224`.

### O que fica para a loja definitiva:
- Integração com gateway de pagamentos real (PIX Banco Central, Asaas, Mercado Pago, etc.).
- Cálculo dinâmico de frete via API dos Correios / Melhor Envio.
- Painel de administração / ERP para controle de estoque físico e online em tempo real.
- Catálogo sincronizado com as coleções reais da boutique física.

---

## 🚀 Tecnologias Utilizadas

- **React 18** (Vite + TypeScript)
- **TailwindCSS** + Headless UI
- **React Router Dom v6** (SPA)
- **Context API & Hooks** (`CartContext` e `WishlistContext` com persistência em `localStorage`)
- **React Hot Toast** (notificações visuais elegantes)
- **React Icons** (Hi2 e Fa6)

---

## 💻 Como Instalar e Executar Localmente

### 1. Clonar ou Acessar a Pasta
```bash
cd "c:\Users\Lenovo\Desktop\Backup_Google_Drive\Pessoal\projetos\estiloboutiquemodapluss"
```

### 2. Instalar Dependências
```bash
npm install
```
*(No PowerShell do Windows, se a política de scripts bloquear o npm, utilize `npm.cmd install`)*

### 3. Executar o Servidor de Desenvolvimento
```bash
npm start
# ou
npm run dev
```
Acesse o navegador no endereço exibido (geralmente `http://localhost:5173/`).

### 4. Gerar o Build de Produção
```bash
npm run build
```
Os arquivos otimizados para deploy serão gerados no diretório `dist/`.

---

## 🌐 Deploy

O projeto inclui arquivos pré-configurados para deploy em plataformas modernas de hospedagem:
- `vercel.json`: Redirecionamento SPA para Vercel
- `public/_redirects`: Redirecionamento SPA para Netlify / Cloudflare Pages

---

## 📜 Créditos e Direitos Autorais

Este projeto foi construído adaptando a base open-source [Fashion-eCommerce-Shop-in-React](https://github.com/Kuzma02/Fashion-eCommerce-Shop-in-React), desenvolvida originalmente por **Aleksandar Kuzmanović**.

Todos os direitos de autoria e licença MIT da base técnica original permanecem rigorosamente preservados conforme o arquivo [`LICENSE`](./LICENSE):
- **Copyright (c) 2024 Aleksandar Kuzmanović**
- Adaptado e customizado para **Estilo Boutique Moda Plus Size** (Guarapuava/PR).
