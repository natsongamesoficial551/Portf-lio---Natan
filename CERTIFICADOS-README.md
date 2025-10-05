# 🎓 Sistema de Certificados - Guia Completo

## 📋 Como Funciona

O sistema carrega certificados automaticamente de duas formas:
1. **Desenvolvimento**: Da pasta `assets2/certf/`
2. **Produção (Netlify)**: Da pasta `public/certificates/` via manifest

## ✅ Passos para Adicionar Certificados no Netlify

### 1. Adicione suas imagens de certificado

Coloque todas as suas imagens (PNG, JPG, etc.) na pasta:
```
public/certificates/
```

**IMPORTANTE**: As imagens REAIS devem estar nesta pasta antes do deploy!

### 2. Build automático

Quando você rodar:
```bash
npm run build
```

O sistema automaticamente:
- ✓ Detecta todas as imagens em `public/certificates/`
- ✓ Gera o arquivo `certificates-manifest.json`
- ✓ Copia tudo para a pasta `dist/`

### 3. Deploy no Netlify

```bash
git add .
git commit -m "Adicionados certificados"
git push
```

O Netlify vai:
- ✓ Rodar `npm run build` automaticamente
- ✓ Detectar as imagens em `public/certificates/`
- ✓ Publicar o site com os certificados visíveis

## 🔍 Verificação Passo a Passo

### Antes de fazer commit:

1. **Verifique se as imagens existem**:
```bash
ls -lh public/certificates/
```
Você deve ver suas imagens PNG/JPG com tamanhos reais (não arquivos de 20 bytes!)

2. **Teste o build localmente**:
```bash
npm run build
ls -lh dist/certificates/
```
As imagens devem estar na pasta `dist/certificates/`

3. **Verifique o manifest**:
```bash
cat dist/certificates-manifest.json
```
Deve listar todos os seus certificados

### Se os certificados não aparecerem no Netlify:

1. **Verifique o log de build do Netlify**
   - Vá em: Site > Deploys > (último deploy) > Deploy log
   - Procure por erros relacionados a `certificates`

2. **Verifique se os arquivos foram commitados**:
```bash
git ls-files public/certificates/
```
Deve listar todas as suas imagens

3. **Verifique o tamanho dos arquivos**:
```bash
du -h public/certificates/*
```
Arquivos muito pequenos (20 bytes) são placeholders inválidos!

## 🎯 Estrutura de Pastas

```
projeto/
├── assets2/
│   └── certf/                          # Certificados originais (opcional)
│       ├── Certificado 1.png
│       └── Certificado 2.png
│
├── public/                             # IMPORTANTE: Arquivos para produção
│   ├── certificates/                   # ← COLOQUE SUAS IMAGENS AQUI
│   │   ├── Certificado 1.png
│   │   └── Certificado 2.png
│   └── certificates-manifest.json      # Gerado automaticamente
│
└── dist/                               # Pasta de build (gerada automaticamente)
    ├── certificates/
    └── certificates-manifest.json
```

## 🚨 Problemas Comuns

### Problema: "Adicione certificados na pasta public/certificates/"

**Causa**: Não há imagens em `public/certificates/` ou o manifest não foi gerado

**Solução**:
1. Coloque suas imagens PNG/JPG em `public/certificates/`
2. Rode: `npm run generate-certs`
3. Rode: `npm run build`
4. Commit e push

### Problema: Imagens não carregam (404 no browser)

**Causa**: Nomes de arquivos com espaços ou caracteres especiais

**Solução**: O sistema já codifica automaticamente os nomes com `encodeURIComponent()`

### Problema: Certificados aparecem localmente mas não no Netlify

**Causas possíveis**:
1. Arquivos não foram commitados no Git
2. Arquivos são placeholders de texto (20 bytes)
3. Build do Netlify falhou

**Solução**:
```bash
# 1. Verifique os arquivos
ls -lh public/certificates/

# 2. Adicione ao Git
git add public/certificates/
git status

# 3. Verifique que são imagens reais
file public/certificates/*.png

# 4. Commit e push
git commit -m "Fix: adicionados certificados reais"
git push
```

## 🔧 Scripts Disponíveis

```bash
# Gerar manifest manualmente
npm run generate-certs

# Build completo (gera manifest + build)
npm run build

# Desenvolvimento
npm run dev
```

## 📝 Formatos Suportados

- ✅ PNG
- ✅ JPG / JPEG
- ✅ GIF
- ✅ WEBP

## 💡 Dicas

1. **Sempre use imagens reais**, não placeholders de texto
2. **Mantenha backups** em `assets2/certf/` e o sistema copia automaticamente
3. **Nomes com espaços são OK** - o sistema lida com isso automaticamente
4. **Teste localmente** antes de fazer deploy
5. **Verifique o console do navegador** para mensagens de erro

## 🎨 Adicionando Novos Certificados

### Método Rápido:
1. Coloque a imagem em `public/certificates/Nome do Certificado.png`
2. `npm run build`
3. `git add .`
4. `git commit -m "Novo certificado adicionado"`
5. `git push`

### Método com Organização:
1. Coloque a imagem original em `assets2/certf/`
2. `npm run generate-certs` (copia para public automaticamente)
3. `npm run build`
4. `git add .`
5. `git commit -m "Novo certificado adicionado"`
6. `git push`

## 🐛 Debug

Para ver o que está acontecendo, abra o Console do navegador (F12) e procure por:
- `Certificates from assets2: X` - Quantos certificados foram encontrados
- `Loading from public folder...` - Sistema tentando carregar do public
- `Certificates from public: [...]` - Lista de certificados carregados
- `Loading certificate X: /path/to/image` - Caminho de cada imagem
- `Failed to load image` - Erro ao carregar imagem específica

## ✨ Sistema Automático

O código está configurado para:
1. ✅ Tentar carregar de `assets2/certf/` primeiro (desenvolvimento)
2. ✅ Se falhar, carregar de `public/certificates/` (produção)
3. ✅ Se falhar, usar lista estática hardcoded como último recurso
4. ✅ Codificar URLs automaticamente para lidar com espaços
5. ✅ Mostrar logs detalhados no console
6. ✅ Exibir borda vermelha em imagens com erro

---

**Se ainda tiver problemas**, verifique:
1. Console do navegador (F12)
2. Network tab (procure por 404 errors)
3. Netlify deploy logs
4. `git ls-files public/certificates/` para confirmar que os arquivos foram commitados
