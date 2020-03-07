import React, { useState, useEffect } from 'react';
import colors from '~/styles/colors';
import { FiSearch, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import BGImage from '~/components/shared/BGImage';

import commentsapi from './comments.json';

import {
  Container,
  Header,
  FormControl,
  Statistics,
  BtnTranslate,
  ListComments,
  Comment,
  Pagination,
} from './styles';

export default function SectionComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    function loadComments() {
      setComments(commentsapi.comments);
    }
    loadComments();
  }, []);

  return (
    <Container id="comments">
      <Header>
        <h2>Comentários</h2>
        <div>
          <div className="qtd-comments">
            <div className="rate">
              <FaStar size="14" color={colors.secondary} />
              <strong>4,87</strong>
            </div>
            <div className="qtd">
              <strong>504</strong>
              <span>comentários</span>
            </div>
          </div>
          <FormControl>
            <input placeholder="Pesquisar nos comentários" />
            <FiSearch size="18" />
          </FormControl>
        </div>
      </Header>

      <Statistics>
        <ul>
          <li>
            <span>Coumincação</span>
            <div>
              <div className="barra"></div>
              <strong>5,0</strong>
            </div>
          </li>
          <li>
            <span>Check-in</span>
            <div>
              <div className="barra"></div>
              <strong>4,9</strong>
            </div>
          </li>
          <li>
            <span>Precisão</span>
            <div>
              <div className="barra"></div>
              <strong>4,9</strong>
            </div>
          </li>
          <li>
            <span>Localização</span>
            <div>
              <div className="barra"></div>
              <strong>4,9</strong>
            </div>
          </li>
          <li>
            <span>Limpeza</span>
            <div>
              <div className="barra"></div>
              <strong>4,9</strong>
            </div>
          </li>
          <li>
            <span>Valor</span>
            <div>
              <div className="barra"></div>
              <strong>4,9</strong>
            </div>
          </li>
        </ul>
      </Statistics>

      <BtnTranslate>Traduzir comentários para Portugês</BtnTranslate>

      <ListComments>
        {comments.map(comment => (
          <Comment key={comment.id}>
            <header>
              <BGImage image={comment.avatar} size={['45px', '45px']} circle />
              <div className="meta">
                <strong>{comment.name}</strong>
                <small>{comment.date}</small>
              </div>
            </header>
            <p>{comment.text}</p>
          </Comment>
        ))}

        <Pagination>
          <ul>
            <li className="active">
              <button type="button" onClick={() => {}}>
                1
              </button>
            </li>
            <li>
              <button type="button" onClick={() => {}}>
                2
              </button>
            </li>
            <li>
              <button type="button" onClick={() => {}}>
                3
              </button>
            </li>
            <li>
              <span>...</span>
            </li>
            <li>
              <button type="button" onClick={() => {}}>
                72
              </button>
            </li>
            <li>
              <button type="button" onClick={() => {}}>
                <FiChevronRight />
              </button>
            </li>
          </ul>
        </Pagination>
      </ListComments>
    </Container>
  );
}
