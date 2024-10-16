const Vaga = require('../models/Vaga.js');

// Adicionar nova vaga de emprego
exports.vagasCadastro = async (req, res) => {
  try {
      const { titulo, descricao, cargo, cidade, salario } = req.body;
      const novaVaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
      res.status(201).json({ message: 'Vaga criada com sucesso!', vaga: novaVaga });
  } catch (error) {
      res.status(500).json({ message: 'Erro ao criar a vaga', error });
  }
};

// Listar título de todas as vagas cadastradas
exports.vagasListar = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({ attributes: ['id', 'titulo'] });
    res.status(200).json(vagas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar vagas', error });
  }
};

// Mostrar detalhes específicas de uma vaga pelo id
exports.vagasIdDetalhes = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (vaga) {
      res.status(200).json(vaga);
    } else {
      res.status(404).json({ message: 'Vaga não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar vaga', error });
  }
};

// Atualizar os dados de uma vaga existente com base no id
exports.vagasIdAtualizar = async (req, res) => {
  try {
    const vaga = await Vaga.update(req.body, { where: { id: req.params.id } });
    if (vaga[0] > 0) {
      res.status(200).json({ message: 'Vaga atualizada' });
    } else {
      res.status(404).json({ message: 'Vaga não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar vaga', error });
  }
};

// Remover uma vaga do sistema
exports.vagasIdDelete = async (req, res) => {
  try {
    const result = await Vaga.destroy({ where: { id: req.params.id } });
    if (result) {
      res.status(200).json({ message: 'Vaga deletada' });
    } else {
      res.status(404).json({ message: 'Vaga não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar vaga', error });
  }
};

// Listar as vagas filtradas por cargo (ex: Desenvolvedor, Designer)
exports.cargo = async (req, res) => {
  try {
      const { cargo } = req.params;
      const vagasPorCargo = await Vaga.findAll({
          where: { cargo } // busca vagas com base no campo 'cargo'
      });

      if (vagasPorCargo.length > 0) {
          res.status(200).json(vagasPorCargo);
      } else {
          res.status(404).json({ message: "Nenhuma vaga encontrada para o cargo especificado." });
      }
  } catch (error) {
      res.status(500).json({ message: "Erro ao buscar vagas por cargo.", error });
  }
};

// Listar as vagas disponíveis em uma determinada cidade
exports.cidade = async (req, res) => {
  try {
      const { cidade } = req.params;
      const vagasPorCidade = await Vaga.findAll({
          where: { cidade } // busca vagas com base no campo 'cidade'
      });

      if (vagasPorCidade.length > 0) {
          res.status(200).json(vagasPorCidade);
      } else {
          res.status(404).json({ message: "Nenhuma vaga encontrada para a cidade especificada." });
      }
  } catch (error) {
      res.status(500).json({ message: "Erro ao buscar vagas por cidade.", error });
  }
};
