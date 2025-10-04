# Como Adicionar Certificados

Este documento explica como adicionar novos certificados ao site de forma automática.

## Método Recomendado (Automático)

### Para Adicionar Novos Certificados:

1. **Adicione as imagens** em **UMA** destas pastas:
   - `assets2/certf/` (desenvolvimento)
   - `public/certificates/` (produção)

2. **Faça o build** do projeto:
   ```bash
   npm run build
   ```

3. **Commit e push** para o GitHub:
   ```bash
   git add .
   git commit -m "Adicionados novos certificados"
   git push
   ```

O Netlify vai automaticamente:
- Detectar as imagens
- Gerar o manifest
- Fazer o deploy com os novos certificados

## Estrutura

```
projeto/
├── assets2/certf/           # Certificados originais (desenvolvimento)
├── public/certificates/     # Certificados para produção
└── public/certificates-manifest.json  # Lista automática de certificados
```

## Formatos Suportados

- JPG / JPEG
- PNG
- GIF
- WEBP

## Como Funciona

1. Quando você roda `npm run build`, o script `generate-certificates-manifest.js` é executado automaticamente
2. Ele copia os certificados de `assets2/certf/` para `public/certificates/`
3. Gera um arquivo `certificates-manifest.json` com a lista de todos os certificados
4. O Vite inclui tudo na pasta `public/` no build final
5. O site carrega os certificados automaticamente do manifest

## Troubleshooting

### Certificados não aparecem no site hospedado

1. Verifique se as imagens estão em `public/certificates/`
2. Rode `npm run generate-certs` para gerar o manifest manualmente
3. Faça o build novamente: `npm run build`
4. Commit e push todas as alterações

### Adicionar certificados manualmente sem rebuild

Se você quiser apenas atualizar o manifest:

```bash
npm run generate-certs
```

Isso vai copiar os certificados de `assets2/certf/` para `public/certificates/` e gerar o manifest.

## Dica

Sempre mantenha suas imagens originais em `assets2/certf/`. O sistema vai copiá-las automaticamente para `public/certificates/` durante o build.
