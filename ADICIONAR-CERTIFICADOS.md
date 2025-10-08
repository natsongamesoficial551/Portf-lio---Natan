# 🎓 COMO ADICIONAR CERTIFICADOS

## ⚠️ PROBLEMA ATUAL

Seus certificados **NÃO ESTÃO APARECENDO** no Netlify porque os arquivos atuais são **placeholders dummy** de 20 bytes, não são imagens reais.

## ✅ SOLUÇÃO - PASSO A PASSO

### 1️⃣ Localize suas imagens REAIS de certificados

Você precisa dos arquivos PNG/JPG **reais** dos seus certificados. Não podem ser arquivos de texto ou placeholders.

### 2️⃣ Coloque as imagens na pasta correta

Copie todas as imagens **REAIS** dos seus certificados para:

```
public/certificates/
```

**Exemplo:**
```
public/certificates/
├── Alura IA certificado.png          (deve ter 100KB+, não 20 bytes!)
├── Daxus Certificado.png             (deve ter 100KB+, não 20 bytes!)
├── Discover Certificado Rocketseat.png
└── Engenharias de Prompt Rocketseat Certificado.png
```

### 3️⃣ Verifique que são arquivos REAIS

```bash
# Este comando mostra o tamanho dos arquivos
ls -lh public/certificates/

# Você DEVE ver algo como:
# -rw-r--r-- 1 user user 156K Oct 8 certificado1.png  ✅ BOM
# -rw-r--r-- 1 user user 243K Oct 8 certificado2.png  ✅ BOM

# E NÃO isto:
# -rw-r--r-- 1 user user 20 Oct 8 certificado1.png   ❌ RUIM (placeholder)
```

### 4️⃣ Faça o build

```bash
npm run build
```

Você verá:
```
✅ Generated manifest with 4 certificates
📄 Manifest saved to: public/certificates-manifest.json
```

### 5️⃣ Commit e push

```bash
git add public/certificates/
git add public/certificates-manifest.json
git commit -m "Adicionados certificados reais"
git push
```

### 6️⃣ Aguarde o deploy do Netlify

O Netlify vai:
1. Detectar o push
2. Rodar `npm run build`
3. Copiar `public/certificates/` para a pasta de produção
4. Publicar o site com os certificados

---

## 🔍 VERIFICAÇÃO

### Como saber se funcionou localmente:

1. Rode `npm run build`
2. Verifique: `ls -lh dist/certificates/`
3. Você deve ver seus certificados com tamanhos reais (KB ou MB)

### Como saber se funcionou no Netlify:

1. Acesse seu site hospedado
2. Vá até a seção de Certificados
3. Abra o Console do navegador (F12)
4. Procure por logs:
   - `Certificates from public: [...]` - deve mostrar a lista
   - `Loading certificate X: /certificates/...` - deve mostrar os caminhos

Se aparecer "Certificados em Breve" = não há certificados reais no servidor

---

## 🚨 PROBLEMAS COMUNS

### Problema 1: "Certificados em Breve" aparece no site

**Causa:** Não há imagens reais em `public/certificates/`

**Solução:**
1. Adicione as imagens REAIS (não placeholders)
2. Verifique o tamanho: `ls -lh public/certificates/`
3. Build: `npm run build`
4. Commit e push

### Problema 2: Arquivos têm 20 bytes

**Causa:** São placeholders dummy, não imagens reais

**Solução:**
1. Delete os placeholders: `rm public/certificates/*.png`
2. Copie suas imagens REAIS para `public/certificates/`
3. Build: `npm run build`

### Problema 3: Certificados aparecem localmente mas não no Netlify

**Causas possíveis:**
- Os arquivos não foram commitados no Git
- Os arquivos são placeholders
- Cache do navegador

**Solução:**
```bash
# 1. Verifique se os arquivos estão no Git
git ls-files public/certificates/

# 2. Se não aparecer nada, adicione:
git add public/certificates/
git status

# 3. Verifique o tamanho
ls -lh public/certificates/

# 4. Se estiver OK, commit e push
git commit -m "Adicionados certificados reais"
git push

# 5. Limpe o cache do Netlify
# Vá em: Site > Deploys > Trigger deploy > Clear cache and deploy
```

---

## 📂 ESTRUTURA ESPERADA

```
projeto/
├── public/
│   ├── certificates/                    ← COLOQUE SUAS IMAGENS AQUI
│   │   ├── .gitkeep
│   │   ├── certificado1.png            (156KB - imagem real)
│   │   ├── certificado2.png            (243KB - imagem real)
│   │   └── certificado3.png            (189KB - imagem real)
│   └── certificates-manifest.json       ← Gerado automaticamente
│
├── dist/                                 ← Pasta de build (não editar)
│   ├── certificates/                    ← Copiado do public/
│   └── certificates-manifest.json
│
└── assets2/certf/                        ← Opcional: backup dos originais
```

---

## ✨ RESUMO

1. ✅ Adicione imagens **REAIS** (não placeholders) em `public/certificates/`
2. ✅ Verifique que têm tamanho > 1KB: `ls -lh public/certificates/`
3. ✅ Build: `npm run build`
4. ✅ Verifique dist: `ls -lh dist/certificates/`
5. ✅ Commit e push: `git add . && git commit -m "Certificados" && git push`
6. ✅ Aguarde deploy do Netlify (2-3 minutos)
7. ✅ Acesse o site e veja os certificados!

---

## 🆘 AINDA NÃO FUNCIONOU?

1. Abra o Console do navegador (F12) no site
2. Vá até a aba "Network"
3. Recarregue a página
4. Procure por requisições para `/certificates/`
5. Se aparecer **404** = arquivos não foram incluídos no build
6. Se aparecer **200** mas não carregar = problema com o formato da imagem

**Verifique:**
- Os arquivos estão em `public/certificates/`? ✅
- São imagens reais (> 1KB)? ✅
- Foram commitados no Git? ✅
- O build passou sem erros? ✅
- O Netlify fez o deploy? ✅

Se tudo estiver ✅ e ainda não funcionar, verifique os logs de deploy do Netlify em: Site > Deploys > (último deploy) > Deploy log
