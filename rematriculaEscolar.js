const idadeDoAluno = 18;
const possuiResponsavel = false;

console.log(`
${idadeDoAluno >= 18 ? 'Rematrícula realizada com sucesso' :
        idadeDoAluno < 18 && possuiResponsavel ? 'Rematrícula realizada com sucesso acompanhado do responsável' :
            'Não é possível fazer a rematrícula'
    }
    `);