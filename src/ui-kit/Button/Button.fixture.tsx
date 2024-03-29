import '../../react/setup-fixture';
import { Img } from '../Img/Img';
import { Button } from './Button';

export default {
  all: (
    <div className="font-sans overflow-hidden">
      <div>
        <p>Private clients</p>
        <div className="flex gap-6" data-theme="pc">
          <Button href="https://www.rshb.ru/" target="_blank" text="Primary" version="primary" />
          <Button href="https://www.rshb.ru/" target="_blank" text="Link" version="secondary" />
          <Button href="https://www.rshb.ru/" target="_blank" text="Secondary" version="link" />
        </div>
      </div>
      <div>
        <p>Business clients</p>
        <div className="flex gap-6" data-theme="bc">
          <Button href="https://www.rshb.ru/" target="_blank" text="Primary" version="primary" />
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            text="Secondary"
            version="secondary"
          />
        </div>
      </div>
      <div>
        <p>Ecosystem own</p>
        <div className="flex gap-6" data-theme="eo">
          <Button href="https://www.rshb.ru/" target="_blank" text="Primary" version="primary" />
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            text="Secondary"
            version="secondary"
          />
        </div>
      </div>
      <div>
        <p>Disabled</p>
        <div className="flex gap-6">
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            text="Primary"
            version="primary"
            disabled
          />
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            text="Secondary"
            version="secondary"
            disabled
          />
        </div>
      </div>
      <div>
        <p>With Icon</p>
        <div className="flex gap-6" data-theme="pc">
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            aboveText="Доступно в"
            appendLeft={
              /** Div need for perfect pixel */
              <div>
                <Img image={{ icon: 'PlayMarketIcon' }} width="24" height="24" asSVG />
              </div>
            }
            text="Google Play"
            version="secondary"
          />
          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            aboveText="Загрузите в"
            appendLeft={
              <div>
                <Img image={{ icon: 'AppleIcon' }} width="24" height="24" asSVG />
              </div>
            }
            text="App Store"
            version="secondary"
          />

          <Button
            href="https://www.rshb.ru/"
            target="_blank"
            appendRight={
              <div>
                <Img image={{ icon: 'TelegramIcon' }} width="20" height="16" asSVG />
              </div>
            }
            text="Мы в Telegram"
            version="primary"
          />
        </div>
      </div>
      <div>
        <p>Rounded with only Icon</p>
        <div className="flex gap-6" data-theme="pc">
          <Button
            rounded
            href="https://www.rshb.ru/"
            target="_blank"
            version="secondary"
            appendLeft={<Img image={{ icon: 'PlayMarketIcon' }} width="20" height="21" asSVG />}
          />
          <Button
            rounded
            href="https://www.rshb.ru/"
            target="_blank"
            version="secondary"
            appendLeft={<Img image={{ icon: 'AppleIcon' }} width="18" height="20" asSVG />}
          />
        </div>
      </div>
    </div>
  ),
  'primary (Private clients)': (
    <div data-theme="pc">
      <Button
        href="https://www.rshb.ru/"
        target="_blank"
        text="Оформить кредит"
        version="primary"
      />
    </div>
  ),
  'secondary (Private clients)': (
    <div data-theme="pc">
      <Button
        href="https://www.rshb.ru/"
        target="_blank"
        text="Оформить кредит"
        version="secondary"
      />
    </div>
  ),
  'primary (Business clients)': (
    <div data-theme="bc">
      <Button
        href="https://www.rshb.ru/"
        target="_blank"
        text="Оформить кредит"
        version="primary"
      />
    </div>
  ),
  'secondary (Business clients)': (
    <div data-theme="bc">
      <Button
        href="https://www.rshb.ru/"
        target="_blank"
        text="Оформить кредит"
        version="secondary"
      />
    </div>
  ),
  'primary (Ecosystem own)': (
    <div data-theme="eo">
      <Button
        href="https://www.rshb.ru/"
        target="_blank"
        text="Оформить кредит"
        version="primary"
      />
    </div>
  ),
  'secondary (Ecosystem own)': (
    <div data-theme="eo">
      <Button
        href="https://www.rshb.ru/"
        target="_blank"
        text="Оформить кредит"
        version="secondary"
      />
    </div>
  ),
  'primary (disabled)': (
    <Button
      href="https://www.rshb.ru/"
      target="_blank"
      text="Оформить кредит"
      version="primary"
      disabled
    />
  ),
  'secondary (disabled)': (
    <Button
      href="https://www.rshb.ru/"
      target="_blank"
      text="Оформить кредит"
      version="secondary"
      disabled
    />
  ),
};
