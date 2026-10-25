@echo off
cls
echo ==========================================
echo      GERADOR DE QR CODE E SENHAS (dev)
echo ==========================================
echo.

REM Instala dependências se necessário
if not exist "node_modules" (
    echo Instalando dependências...
    call npm install
    echo.
)

REM Inicia o app
echo Iniciando em modo de desenvolvimento...
echo Para parar: Pressione Ctrl+C
echo.

call npm start

echo.
pause